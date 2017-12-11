//numbering for pre>code blocks
$(function(){
    $('pre code').each(function(){
        var lines = $(this).text().split('\n').length - 1;
        var $numbering = $('<code></code>').addClass('pre-numbering');
        
        // compute pre-numbering width
        var mumSum = lines > 0 ? 1 : 0;
        var tmp_line = lines / 10;
        while(tmp_line >= 1) {
            mumSum ++;
            tmp_line = tmp_line / 10;
        }

        if($(this).css("margin-left") != "-.05px") {
            $(this).css("margin-left", mumSum * 2 + "ex");
        }
        
        $(this)
            .parent()
            .append($numbering);
        for(i = 1; i <= lines; i ++){
            $numbering.append(i + '\n');
        }
    });
});