$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("KsnJfPG2Vg2BFVPWbBixqMCklQw5DEnucSeYNBqH", "6hTd9YF9GUDyECSola95ANP7Ml5Lzg4CdArIMXLh");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
});
