(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define([], factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root.skyLight = factory(root);
    }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
    'use strict';
    //
    // Variables
    //
    var window = root; // Map window to root to avoid confusion
    var publicMethods = {}; // Placeholder for public methods
    // Default settings
    var defaults = { //Default Options
        appendTo: "#vendor-content",
        headerOverride: "",
        numOfCells: 3,
        products: [
            "/store/opt/whey.html",
            "/store/opt/natwhey.html",
            "/store/opt/cas.html"
        ],
        skyZone: 1,
        skyZoneHeaders: {
            1: "You May Prefer This",
            2: "Bought With",
            3: "empty",
            4: "empty",
            5: "empty"
        }
    };
    //
    // Methods
    //

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
    console.log(arguments[0]);
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
    if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
    }

    console.log(this.options);
    /**
     * A private method
     * @private
     */
    var somePrivateMethod = function () {
        // Code goes here...
    };

    /**
     * A public method
     */
    publicMethods.doSomething = function () {
        somePrivateMethod();
        // Code goes here...
    };

    /**
     * Another public method
     */
    publicMethods.init = function ( options ) {

        // Merge user options with defaults
        var settings = extend( defaults, options || {} );

        // Listen for click events
        document.addEventListener( 'click', function (){
            // Do something...
        }, false );

        // Listen for window resize events
        window.addEventListener( 'resize',  function (){
            // Do something...
        }, false );

        // Code goes here...
        //
    };


    //
    // Public APIs
    //

    return publicMethods;

});