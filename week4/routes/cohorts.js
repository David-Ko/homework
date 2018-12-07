const express = require("express");
const router = express.Router();
const knex = require("../db/client") //HELLO??? You're using knext below!  So, you MUST require it

router.get('/new', (req, res)=>{
    res.render('new')
})

router.post('/', (req, res)=>{
    const logoUrl = req.body.logoUrl;
    const name = req.body.name;
    const members = req.body.members;
    const newCohort = {
        logoUrl: logoUrl,
        name: name,
        members: members
    };

    knex 
        .insert(newCohort)
        .into('cohorts')
        .returning("*")
        .then((cohorts)=>{
            console.log(cohorts);
            const [cohort] = cohorts;
            // res.redirect(`/cohorts/${cohort.id}`)
            res.redirect(`/cohorts/${cohort.id}`) //must be EXPLICIT!
        })
})


router.get('/:id/form', (req, res)=>{
    const id = req.params.id;

    knex  
        .select("*")
        .from("cohorts")
        .where({ id: id })
        .first() //forgot this too!!!!!!
        .then((cohort)=>{ //forgot to pass an argument here!!!!!!!!!!!!!!!!!!!!!!!
            console.log(cohort);
            const method = req.query.method;
            const quantity = req.query.quantity;
            const members = cohort.members;
            
        
function teamBuilder (strOfMembers, quantity, method){
    let names = strOfMembers.split(', ');
    let shuffledMembers = [];
    while (names.length > 0 ){
      random = Math.floor(Math.random()* names.length)
      shuffledMembers.push(names.splice(random, 1)[0])
    }
  if (method === "numberPerTeam") {
    let numOfTeamNeeded = Math.ceil(shuffledMembers.length/quantity)
    let teamsArray = [];
    for (let i = 0; i < numOfTeamNeeded; i++){
      teamsArray.push([])
    }   
  
    while (shuffledMembers.length > 0){
      for (let i = 0; i < teamsArray.length; i++){
        if (shuffledMembers.length > 0){
          for (let j = 0; j < quantity; j++){
            if(shuffledMembers.length > 0) {
          teamsArray[i].push(shuffledMembers.pop())
            } else {break}
          }
        } else {
          break
        }
      }
    }
    return teamsArray
  }
   
  
  if (method === "teamCount") {
  
    let teamsArray = [];
    for (let i = 0; i < quantity; i++){
      teamsArray.push([])
    }   
    
    while (shuffledMembers.length > 0){
      for (let i = 0; i < teamsArray.length; i++){
        if (shuffledMembers.length > 0){
          teamsArray[i].push(shuffledMembers.pop())
        } else {
          break
        }
      }
    }
    return teamsArray
  }
}
  let setTeams = teamBuilder(members, quantity, method)

                 // function teamCount (strOfMembers, quantity){
            //     let names = strOfMembers.split(', ');
            //     let shuffledMembers = [];
            //     while (names.length > 0){
            //       random = Math.floor(Math.random()* names.length)
            //       shuffledMembers.push(names.splice(random, 1)[0])
            //     }
                
            //     let teamsArray = [];
            //     for (let i = 0; i < quantity; i++){
            //       teamsArray.push([])
            //     }   
                
            //     while (shuffledMembers.length > 0){
            //       for (let i = 0; i < teamsArray.length; i++){
            //         if (shuffledMembers.length > 0){
            //           teamsArray[i].push(shuffledMembers.pop())
            //         } else {
            //           break
            //         }
            //       }
            //     }
            //     return teamsArray
            //   }   
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            res.render('show', { 
                cohort:cohort,
                method:method,  
                quantity:quantity,
                members: members,
                setTeams: setTeams
            })
        })

})








router.get('/:id', (req, res)=>{
    const id = req.params.id;

    knex  
        .select("*")
        .from("cohorts")
        .where({ id: id })
        .first() //forgot this too!!!!!!
        .then((cohort)=>{ //forgot to pass an argument here!!!!!!!!!!!!!!!!!!!!!!!
            console.log(cohort);
            const method = req.query.method;
            const quantity = req.query.quantity;
            const members = cohort.members;
            const setTeams = []
            res.render('show', { 
                cohort:cohort,
                method:method,  
                quantity:quantity,
                members: members,
                setTeams: setTeams })
        })

    // const method = req.query.method;
    // const quantity = req.query.quantity;

})

router.get('/', (req, res)=>{
    knex
        .select("*")
        .from("cohorts")
        .orderBy('id', 'desc')
        .then((cohorts)=>{
            res.render('index', {cohorts})
        });
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id
    knex   
        .select("*")
        .from("cohorts")
        .where({ id: id})
        .del()
        .then(()=>{
            // res.render('index') //CANNOT res.render ...i dno't know why though
            res.redirect('/cohorts')  //FORGOT TO require METHOD-OVERRIDE
        })
})


router.get('/:id/edit', (req, res)=>{
    const id = req.params.id
    knex   
        .select("*")
        .from("cohorts")
        .where({ id: id})
        // .returning("*")  //why not this?
        .first()
        .then((cohort)=>{
            res.render('edit', {cohort}) //MISTAKE!  I used redirect
        })
})

router.patch('/:id', (req, res)=>{
    // const logoUrl = req.body.logoUrl
    // const name = req.body.name
    // const members = req.body.members

    // const newUpdate = {
    //     logoUrl: logoUrl,
    //     name: name,
    //     members: members
    // }
    const id = req.params.id  //MISTAKE!  Forgot to add this line
    knex
        .select("*")
        .from("cohorts")
        .where({ id:id })
        .update({
            logoUrl: req.body.logoUrl,
            name: req.body.name,
            members: req.body.members
        })
        .then(()=>{
            // res.render(`/cohorts/${cohort.id}`)
            res.redirect(`/cohorts/${req.params.id}`)
        })
})

module.exports = router