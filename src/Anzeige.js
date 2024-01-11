import React from 'react';
class Anzeige extends React.Component {
constructor(props) {
super(props);
//ein Array mit den Bildern
this.state = {
bilder: [
{ src: './bild1.jpg', 
text: 'Schönes ruhiges Meer' },
{ src: './bild2.jpg', text: 
'Sonnenuntergang im Gebirge' },
{ src: './bild3.jpg', text: 
'Ahorne im Herbst' },
{ src: './bild4.jpg', text:
 'Abendrot'},
 { src: './bild5.jpg', text:
 'Schöne Berge'}
],
//für den aktuellen Index
index: 0,
};
//die Methoden binden
this.blaettern = this.blaettern.bind(this);
this.vorwaerts = this.vorwaerts.bind(this);
this.rueckwaerts = this.rueckwaerts.bind(this);
}
//die Methode zum Blättern
blaettern(richtung) {
let neuerIndex = this.state.index + richtung;
if (neuerIndex === -1) {
neuerIndex = this.state.bilder.length - 1;
}
else {
    if (neuerIndex === this.state.bilder.length) {
    neuerIndex = 0;
    }
    }
    this.setState({index: neuerIndex});
    }
    vorwaerts() {
    this.blaettern(1);
    }
    rueckwaerts() {
    this.blaettern(-1);
    }
    componentDidMount() {
    setInterval(this.vorwaerts, 8000);
    }
    render() {
    return (
    <div class="wrapper">
    <h1>Eine Slideshow Foto {this.state.index +1}</h1>
     <div>
    <button onClick={this.rueckwaerts}>&#8249;-</button>
    {<img src={this.state.bilder[this.state.index].src} 
    alt={this.state.bilder[this.state.index].text} />}
    <button onClick={this.vorwaerts}>-&#8250;</button>
    </div>
    </div>
    );
    }
    }
    export default Anzeige;