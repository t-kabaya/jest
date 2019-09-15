const notifier = require('node-notifier')
// // String
// notifier.notify('Message')

// // Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!'
// })

// const notifier = require('node-notifier')
const path = require('path')

const options = {
  title: 'test success',
  message: 'Hello from node, Mr. User!',
  icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
  sound: false, // Only Notification Center or Windows Toasters
  wait: false // Wait with callback, until user action is taken against notification
}

notifier.notify(options)

// notifier.on('click', function (notifierObject, options, event) {
//   // Triggers if `wait: true` and user clicks notification
// })

// notifier.on('timeout', function (notifierObject, options) {
//   // Triggers if `wait: true` and notification closes
// })

// const nn = require('node-notifier')

// new nn.NotificationCenter(options).notify()
// new nn.NotifySend(options).notify()
// new nn.WindowsToaster(options).notify(options)
// new nn.WindowsBalloon(options).notify(options)
// new nn.Growl(options).notify(options)

// const NotificationCenter = require('node-notifier/notifiers/notificationcenter')
// new NotificationCenter(options).notify()
