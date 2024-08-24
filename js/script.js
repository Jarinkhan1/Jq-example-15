/* ========== JQ ========== */

//*ex1
 $( function() {
    $( "#draggable" ).draggable();
  } );

//*ex2
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });


//*ex3
$( function() {
    $( "#resizable" ).resizable();
} );


//*ex4
    $( function() {
    $( "#selectable" ).selectable();
} );


//*ex5
     $( function() {
    $( "#sortable" ).sortable();
  } );


 //*ex6
      $( function() {
    $( "#accordion" ).accordion();
  } );


      //*ex7
      $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


      //*ex8

  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );

      //*ex9

  $( function() {
    $( "input" ).checkboxradio();
  } );
 


      //*ex10
   $( function() {
    $( "#datepicker" ).datepicker();
  } );

      //*ex11
 $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );

      //*ex12
$( function() {
    $( "#menu" ).menu();
  } );

      //*ex13
 $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

      //*ex14
 $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

      //*ex15
 $( function() {
    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,
 
        // Callbacks
        change: null,
        random: null
      },
 
      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );
 
        this.changer = $( "<button>", {
          text: "change",
          "class": "custom-colorize-changer"
        })
        .appendTo( this.element )
        .button();
 
        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });
        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };
 
        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();
 
        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
          return;
        }
        this._super( key, value );
      }
    });
 
    // Initialize with default options
    $( "#my-widget1" ).colorize();
 
    // Initialize with two customized options
    $( "#my-widget2" ).colorize({
      red: 60,
      blue: 60
    });
 
    // Initialize with custom green value
    // and a random callback to allow only colors with enough green
    $( "#my-widget3" ).colorize( {
      green: 128,
      random: function( event, ui ) {
        return ui.green > 128;
      }
    });
 
    // Click to toggle enabled/disabled
    $( "#disable" ).on( "click", function() {
      // use the custom selector created for each widget to find all instances
      // all instances are toggled together, so we can check the state from the first
      if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
        $( ":custom-colorize" ).colorize( "enable" );
      } else {
        $( ":custom-colorize" ).colorize( "disable" );
      }
    });
 
    // Click to set options after initialization
    $( "#green" ).on( "click", function() {
      $( ":custom-colorize" ).colorize( "option", {
        red: 64,
        green: 250,
        blue: 8
      });
    });
  } );



      