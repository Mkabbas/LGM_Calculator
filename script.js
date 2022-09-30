$('button').click(function(e) {
    var str = $('input')[0].value;
    switch (e.target.innerHTML) {
        case 'C':
            str = '';
            break;
        
        case '=':
            str = eval(str);
            $('input').hide().fadeIn();
            break;
            
        case '+/-':
            str = -(Number(str));
            break;
        
        case '⌫':
            str = str.slice(0, -1);
            break;

        case 'x':
            str += '*';
            break;

        default:
            str += e.target.innerHTML;
    }
    $('input')[0].value = str;
})
