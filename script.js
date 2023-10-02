alert("ты попал на самый лучший мой сайт")
alert( "Привет" )
var years = prompt('Сколько вам лет?')
var name = prompt('как вас зовут?')
var isAdmin = confirm("Вы - хотите посмотреть мой сайт?")
if (isAdmin)
{
    alert("ок залетай")
    alert('Ваше имя  ' + name)
    alert('Вам ' + years + ' лет!')
}
else
{
    alert("тогда иди чайку попей!")
    window.close()
}