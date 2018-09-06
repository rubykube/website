let team = require( "../../data/i18n/team.json")
var MD5 = require('md5.js');

$(document).ready(function()
{
    $.gravatar = function(emailAddress, overrides, name, sociallink, position)
    {
        let options = $.extend({
            // Defaults are not hardcoded here in case gravatar changes them on their end.
            // integer size: between 1 and 512, default 80 (in pixels)
            size: '',
            // rating: g (default), pg, r, x
            rating: '',
            // url to define a default image (can also be one of: identicon, monsterid, wavatar)
            image: '',
            // secure
            secure: false,
            // support css on img element
            classes: ''
        }, overrides);

        let baseUrl = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';
        
        var md5 = new MD5();
        md5.end(emailAddress);

        return $('<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center"><img class="img-rounded mt-3" width = 100% src="' + baseUrl +
        md5.read().toString('hex') +
            '.jpg?' +
            (options.size ? 's=' + options.size + '&' : '') +
            (options.rating ? 'r=' + options.rating + '&' : '') +
            (options.image ? 'd=' + encodeURIComponent(options.image) : '') +
            '"' +
            (options.classes ? ' class="' + options.classes + '"' : '') +
            ' /><div class="mt-2"><h6 class="mb-0">' + name +
            '<a href="' + sociallink +
            '" target="blank"><span class="fab fa-github ml-1"></span></a></h6></div></div>').bind('error', function()
            {
                $(this).remove();
            });
    };

    for (let index = 0; index < team.teams.length; index++) {
        $('#gravatar').append($.gravatar(team.teams[index].email, {size: '250'}, team.teams[index].name, team.teams[index].social))
    }
});