var options = function(){
    const default_options = {
        pairs:2,
        difficulty:'normal',
        difficulty_infinit:'normal',
        mode_infinit:'no',
        numero_iteracions:0
    };
    
    var pairs = $('#pairs');
    var difficulty = $('#dif');
    var difficulty_infinit = $('#dif_inf');

    var options = JSON.parse(localStorage.options||JSON.stringify(default_options));
    pairs.val(options.pairs);
    difficulty.val(options.difficulty);
    difficulty_infinit.val(options.difficulty_infinit);
    pairs.on('change',()=>options.pairs = pairs.val());
    difficulty.on('change',()=>options.difficulty = difficulty.val());
    difficulty_infinit.on('change',()=>options.difficulty_infinit = difficulty_infinit.val());

    return {
        applyChanges: function(){
            localStorage.options = JSON.stringify(options);
        },
        defaultValues: function(){
            options.pairs = default_options.pairs;
            options.difficulty = default_options.difficulty;
            options.difficulty_infinit = default_options.difficulty_infinit;
            pairs.val(options.pairs);
            difficulty.val(options.difficulty);
            difficulty_infinit.val(options.difficulty_infinit);
        }
    }
}();

$('#default').on('click',function(){
    options.defaultValues();
});

$('#apply').on('click',function(){
    options.applyChanges();
    location.assign("../");
});