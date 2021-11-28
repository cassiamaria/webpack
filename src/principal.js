import Pessoa from './pessoa';
import Button from './components/button/button.js';
import './assets';
import $ from 'jquery';

const atendente = new Pessoa();
console.log(atendente.cumprimentar())

$(function() {
    const handleButton = new Button();
    handleButton.setTitle('Teste Componente');
    handleButton.setClick(function() {
        alert('Clicou!!!');
    })

    $('.area').html(handleButton.render());
});