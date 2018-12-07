
exports.up = function(knex) {
    return knex.schema.createTable('cohorts', table=>{
          table.increments("id");
          table.text("logoUrl");
          table.text("name");
          table.string("members");
          
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cohorts')
  };
  