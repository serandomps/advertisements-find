var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');

dust.loadSource(dust.compile(require('./template'), 'advertisements-find'));

module.exports = function (ctx, container, options, done) {
    var sandbox = container.sandbox;
    dust.render('advertisements-find', options, function (err, out) {
        sandbox.append(out);
        sandbox.on('click', '.edit', function (e) {
            serand.redirect($(this).closest('.thumbnail').attr('href') + '/edit');
            return false;
        });
        done(null, function () {
            $('.advertisements-find', sandbox).remove();
        });
    });
};
