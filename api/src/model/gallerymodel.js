const dbconn = require('../../config/dbconfig');
var Gallery = function (gallery)
{
    this.GalleryID = gallery.GalleryID
    this.Event = gallery.Event
    this.Image = gallery.Image
};

Gallery.getGalleryList = (result) => {
    dbconn.query('select * from gallery', (err, res) => {
        if (err) {
            console.log('error Find in data', err);
            result(null, res);
        }
        else {
            console.log('Data Fetched Success');
            result(null, res);
        }
    });
};
Gallery.deleteGallery = (id, result) => {
    dbconn.query('delete from gallery where GalleryID = ?', id, (err, res) => {
        if (err) {
            console.log('error Find Data', err);
            result(err, null);
        } else {
            console.log('Data Fetched Success');
            result(null, res);
        }

    });
};

Gallery.SubmitGallery = (s, result) => {
    if (s.GalleryID == undefined) {
        dbconn.query('INSERT INTO gallery(Event,Image) values(?,?)', [s.Event, s.Image], (err, res) => {
            if (err) {
                console.log('Data not insert', err);
                result(err, null);
            }
            else {
                console.log('Data insert success');
                result(null, res);
            }
        });
    }
    else {
        dbconn.query("update gallery set Event = ?,Image =? where GalleryID = ?", [s.Event, s.Image, s.GalleryID], (err, res) => {
            if (err) {
                console.log('error find data' + err);
                result(err, null);
            }
            else {
                console.log('data update success');
                result(null, res);
            }
        });
    }
};

module.exports = Gallery;