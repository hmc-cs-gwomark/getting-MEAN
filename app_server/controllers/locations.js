
/* GET 'Home' page */
//First argument of res.render is the jade file 
// with the template that uses this particular controller
module.exports.homelist = function(req, res) {
    res.render('locations-list', { 
        title: 'Home',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to use wifi!',
            sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for.',
        },
        locations: [{
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }]
    });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', { 
        title: 'Location Info',
        pageHeader: { title: 'Starcups' },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '238 S Norton Ave.',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00 am',
                    closing: '7:00 pm',
                    closed: false,
                },
                {
                    days: 'Saturday',
                    opening: '9:00 am',
                    closing: '5:00 pm',
                    closed: false,
                },
                {
                    days: 'Sunday',
                    closed: true,
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things\nabout it.'
            },
            {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great,\nbut the wifi was fast.' 
            }]
        }
    });
};

/* GET 'Add Review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', { 
        title: 'Add Review',
        pageHeader: { title: 'Review Starcups'}
    });
};
