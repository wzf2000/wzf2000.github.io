    function showNumberWithAnimation(i, j, randNumber) {//实现随机数字的样式变动  
      
        var numberCell = $('#number-cell-' + i + '-' + j);  
        numberCell.css("background-color", getNumberBackgroundColor(randNumber));  
        if (randNumber>4) numberCell.css("color", getNumberColor(randNumber));  
		else numberCell.css("box-shadow","0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);")
        numberCell.text(randNumber);  
          
        numberCell.animate({  
            width : "100px",  
            height : "100px",  
            top : getPosTop(i, j),  
            left : getPosLeft(i, j)  
        }, 50);  
    }  
      
    function showMoveAnimation(fromx, fromy, tox, toy){//实现移动格子的样式变动  
          
        var numberCell = $('#number-cell-'+fromx +'-'+fromy);  
        numberCell.animate({top:getPosTop(tox,toy),  
        left:getPosLeft(tox,toy)},200);  
    }  