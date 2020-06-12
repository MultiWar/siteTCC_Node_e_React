
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblUser').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblUser').insert([
        {'idUser': 'a3e8', 'cpf': 'admin2', 'senha': 'af87e27d70bd77d7a5ed4a9b6a6c98b75ddcfe75ed6006b4e871df181f8773a7', 'salt': '049cf34b02b53a0b39aebdfc6992ee55119d44351c0f42a3d9baeb14243f94fa', 'nome': 'Admin'}
      ]);
    });
};
