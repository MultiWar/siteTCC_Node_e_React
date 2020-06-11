
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblPedido').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblPedido').insert([
        {'idPedido': '87df','idUser': '5ad1', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': 'sda7','idUser': 'a3e8', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': 'gsdg','idUser': '5ad1', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': '98sd','idUser': 'a3e8', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': '1wd2','idUser': '5ad1', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'em andamento', 'dataEntrega': '' },
        {'idPedido': '97s8','idUser': '5ad1', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': 'bnc5','idUser': '5ad1', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': 'sda6','idUser': 'a3e8', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'concluído', 'dataEntrega': '' },
        {'idPedido': 'hjgf','idUser': 'a3e8', 'idProgEntrega': '', 'idFuncionario': '', 'precoFinal': '', 'dataPedido': '', 'status': 'em andamento', 'dataEntrega': '' }
      ]);
    });
};
