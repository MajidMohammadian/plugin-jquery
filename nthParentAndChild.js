/*!
 * jQuery nth parent and children Plugin v1.0.1
 * https://github.com/majeed21
 *
 * Copyright 2016 majeed mohammadian
 * Released under the MIT license
 */

(function($){
    $.fn.nthParent = function(n){
        var $p = $(this);
        while ( n-- >= 0 )
        {
            $p = $p.parent();
        }
        return $p;
    };

    $.fn.nthChild = function(n){
        var $c = $(this);
        while ( n-- >= 0 )
        {
            $c = $c.children();
        }
        return $c;
    };
}(jQuery));