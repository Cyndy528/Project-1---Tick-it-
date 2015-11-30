//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Template = Package.templating.Template;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var flashMessages, FlashMessages, sendMessage;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/mrt_flash-messages/packages/mrt_flash-messages.js                                                  //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                       //    // 4
// packages/mrt:flash-messages/messages.js                                                               //    // 5
//                                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                         //    // 8
/**                                                                                                      // 1  // 9
 * flashMessages                                                                                         // 2  // 10
 * { message: String,                                                                                    // 3  // 11
 *   style: String,                                                                                      // 4  // 12
 *   seen: Boolean }                                                                                     // 5  // 13
 */                                                                                                      // 6  // 14
flashMessages = new Mongo.Collection(null);                                                              // 7  // 15
                                                                                                         // 8  // 16
FlashMessages = {                                                                                        // 9  // 17
  // Deprecated, use sendWarning instead. sendWarning is more consistent with Boostrap classes.          // 10
  sendAlert: function(message, options) {                                                                // 11
    sendMessage(message, '', options);                                                                   // 12
    console.log('Deprecated, use sendWarning instead of sendAlert');                                     // 13
  },                                                                                                     // 14
  sendWarning: function(message, options) {                                                              // 15
    sendMessage(message, 'alert-warning', options);                                                      // 16
  },                                                                                                     // 17
  sendError: function(message, options) {                                                                // 18
    sendMessage(message, 'alert-error alert-danger', options);                                           // 19
  },                                                                                                     // 20
  sendSuccess: function(message, options) {                                                              // 21
    sendMessage(message, 'alert-success', options);                                                      // 22
  },                                                                                                     // 23
  sendInfo: function(message, options) {                                                                 // 24
    sendMessage(message, 'alert-info', options);                                                         // 25
  },                                                                                                     // 26
  clear: function() {                                                                                    // 27
    flashMessages.remove({seen: true});                                                                  // 28
  },                                                                                                     // 29
  configure: function(options) {                                                                         // 30
    this.options = this.options || {};                                                                   // 31
    _.extend(this.options, options);                                                                     // 32
  },                                                                                                     // 33
  options: {                                                                                             // 34
    autoHide: true,                                                                                      // 35
    hideDelay: 5000,                                                                                     // 36
    autoScroll: true                                                                                     // 37
  }                                                                                                      // 38
}                                                                                                        // 39
                                                                                                         // 40
sendMessage = function(message, style, options) {                                                        // 41
  options = options || {};                                                                               // 42
  options.autoHide = options.autoHide === undefined ? FlashMessages.options.autoHide : options.autoHide; // 43
  options.hideDelay = options.hideDelay || FlashMessages.options.hideDelay;                              // 44
  flashMessages.insert({ message: message, style: style, seen: false, options: options});                // 45
}                                                                                                        // 46
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 55
                                                                                                               // 56
}).call(this);                                                                                                 // 57
                                                                                                               // 58
                                                                                                               // 59
                                                                                                               // 60
                                                                                                               // 61
                                                                                                               // 62
                                                                                                               // 63
(function () {                                                                                                 // 64
                                                                                                               // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 66
//                                                                                                       //    // 67
// packages/mrt:flash-messages/template.messages_list.js                                                 //    // 68
//                                                                                                       //    // 69
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 70
                                                                                                         //    // 71
                                                                                                         // 1  // 72
Template.__checkName("flashMessages");                                                                   // 2  // 73
Template["flashMessages"] = new Template("Template.flashMessages", (function() {                         // 3  // 74
  var view = this;                                                                                       // 4  // 75
  return Blaze.Each(function() {                                                                         // 5  // 76
    return Spacebars.call(view.lookup("messages"));                                                      // 6  // 77
  }, function() {                                                                                        // 7  // 78
    return [ " \n    ", Spacebars.include(view.lookupTemplate("flashMessageItem")), "\n  " ];            // 8  // 79
  });                                                                                                    // 9  // 80
}));                                                                                                     // 10
                                                                                                         // 11
Template.__checkName("flashMessageItem");                                                                // 12
Template["flashMessageItem"] = new Template("Template.flashMessageItem", (function() {                   // 13
  var view = this;                                                                                       // 14
  return HTML.DIV({                                                                                      // 15
    "class": function() {                                                                                // 16
      return [ "alert ", Spacebars.mustache(view.lookup("style")), " alert-dismissable" ];               // 17
    },                                                                                                   // 18
    role: "alert"                                                                                        // 19
  }, HTML.Raw('\n    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n    '), Blaze.If(function() {
    return Spacebars.call(view.lookup("group"));                                                         // 21
  }, function() {                                                                                        // 22
    return [ "\n      ", HTML.UL("\n        ", Blaze.Each(function() {                                   // 23
      return Spacebars.call(view.lookup("message"));                                                     // 24
    }, function() {                                                                                      // 25
      return [ "\n          ", HTML.LI(Blaze.View("lookup:.", function() {                               // 26
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup(".")));                                  // 27
      })), "\n        " ];                                                                               // 28
    }), "\n      "), "\n    " ];                                                                         // 29
  }, function() {                                                                                        // 30
    return [ "\n      ", Blaze.View("lookup:message", function() {                                       // 31
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));                              // 32
    }), "\n    " ];                                                                                      // 33
  }), "\n  ");                                                                                           // 34
}));                                                                                                     // 35
                                                                                                         // 36
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 108
                                                                                                               // 109
}).call(this);                                                                                                 // 110
                                                                                                               // 111
                                                                                                               // 112
                                                                                                               // 113
                                                                                                               // 114
                                                                                                               // 115
                                                                                                               // 116
(function () {                                                                                                 // 117
                                                                                                               // 118
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 119
//                                                                                                       //    // 120
// packages/mrt:flash-messages/messages_list.js                                                          //    // 121
//                                                                                                       //    // 122
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 123
                                                                                                         //    // 124
Template.flashMessages.helpers({                                                                         // 1  // 125
  messages: function () {                                                                                // 2  // 126
    if (flashMessages.find().count() && FlashMessages.options.autoScroll)                                // 3  // 127
      $('html, body').animate({                                                                          // 4  // 128
        scrollTop: 0                                                                                     // 5  // 129
      }, 200);                                                                                           // 6  // 130
    var messages = flashMessages.find().fetch();                                                         // 7  // 131
    $.each(messages, function(index, value) {                                                            // 8  // 132
      value.group = value.message instanceof Array;                                                      // 9  // 133
    });                                                                                                  // 10
    return messages;                                                                                     // 11
  }                                                                                                      // 12
});                                                                                                      // 13
                                                                                                         // 14
Template.flashMessageItem.rendered = function () {                                                       // 15
  var message = this.data;                                                                               // 16
  Meteor.defer(function() {                                                                              // 17
    flashMessages.update(message._id, {$set: {seen: true}});                                             // 18
  });                                                                                                    // 19
  if (message.options && message.options.autoHide) {                                                     // 20
    var $alert = $(this.find('.alert'));                                                                 // 21
    Meteor.setTimeout(function() {                                                                       // 22
        $alert.fadeOut(400, function() {                                                                 // 23
          flashMessages.remove({_id: message._id});                                                      // 24
        });                                                                                              // 25
      },                                                                                                 // 26
      message.options.hideDelay);                                                                        // 27
  }                                                                                                      // 28
};                                                                                                       // 29
                                                                                                         // 30
Template.flashMessageItem.events({                                                                       // 31
  "click .close": function (e, tmpl) {                                                                   // 32
    e.preventDefault();                                                                                  // 33
    flashMessages.remove(tmpl.data._id);                                                                 // 34
  }                                                                                                      // 35
});                                                                                                      // 36
                                                                                                         // 37
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 162
                                                                                                               // 163
}).call(this);                                                                                                 // 164
                                                                                                               // 165
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:flash-messages'] = {
  FlashMessages: FlashMessages,
  flashMessages: flashMessages
};

})();
