var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_keezhmad_wards_1 = new ol.format.GeoJSON();
var features_keezhmad_wards_1 = format_keezhmad_wards_1.readFeatures(json_keezhmad_wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_keezhmad_wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_keezhmad_wards_1.addFeatures(features_keezhmad_wards_1);
var lyr_keezhmad_wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_keezhmad_wards_1, 
                style: style_keezhmad_wards_1,
                popuplayertitle: 'keezhmad_wards',
                interactive: false,
    title: 'keezhmad_wards<br />\
    <img src="styles/legend/keezhmad_wards_1_0.png" /> ASOKAPURAM NORTH<br />\
    <img src="styles/legend/keezhmad_wards_1_1.png" /> CHAKKANKULANGARA<br />\
    <img src="styles/legend/keezhmad_wards_1_2.png" /> CHALACKAL<br />\
    <img src="styles/legend/keezhmad_wards_1_3.png" /> CHALACKAL CENTRE<br />\
    <img src="styles/legend/keezhmad_wards_1_4.png" /> CHALACKAL EAST<br />\
    <img src="styles/legend/keezhmad_wards_1_5.png" /> CHUNANGAMVELY<br />\
    <img src="styles/legend/keezhmad_wards_1_6.png" /> CHUNANGAMVELY CENTER<br />\
    <img src="styles/legend/keezhmad_wards_1_7.png" /> CHUNANGAMVELY WEST<br />\
    <img src="styles/legend/keezhmad_wards_1_8.png" /> EDAYAPPURAM<br />\
    <img src="styles/legend/keezhmad_wards_1_9.png" /> EDAYAPPURAM WEST<br />\
    <img src="styles/legend/keezhmad_wards_1_10.png" /> ERUMATHALA<br />\
    <img src="styles/legend/keezhmad_wards_1_11.png" /> KEERAMKUNNU<br />\
    <img src="styles/legend/keezhmad_wards_1_12.png" /> KEEZHMAD<br />\
    <img src="styles/legend/keezhmad_wards_1_13.png" /> KEEZHMAD CENTRE<br />\
    <img src="styles/legend/keezhmad_wards_1_14.png" /> KUNNUMPURAM<br />\
    <img src="styles/legend/keezhmad_wards_1_15.png" /> KUTTAMASSERY<br />\
    <img src="styles/legend/keezhmad_wards_1_16.png" /> KUTTAMASSERY CENTRE<br />\
    <img src="styles/legend/keezhmad_wards_1_17.png" /> KUTTAMASSERY EAST<br />\
    <img src="styles/legend/keezhmad_wards_1_18.png" /> NALAMMILE<br />\
    <img src="styles/legend/keezhmad_wards_1_19.png" /> THOTTUMUGHAM<br />\
    <img src="styles/legend/keezhmad_wards_1_20.png" /> THOTTUMUGHAM SOUTH<br />\
    <img src="styles/legend/keezhmad_wards_1_21.png" /> THOTTUMUGHAM WEST<br />\
    <img src="styles/legend/keezhmad_wards_1_22.png" /> <br />' });
var format_GEOLOGYCLIP_2 = new ol.format.GeoJSON();
var features_GEOLOGYCLIP_2 = format_GEOLOGYCLIP_2.readFeatures(json_GEOLOGYCLIP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGYCLIP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGYCLIP_2.addFeatures(features_GEOLOGYCLIP_2);
var lyr_GEOLOGYCLIP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGYCLIP_2, 
                style: style_GEOLOGYCLIP_2,
                popuplayertitle: 'GEOLOGY CLIP',
                interactive: true,
    title: 'GEOLOGY CLIP<br />\
    <img src="styles/legend/GEOLOGYCLIP_2_0.png" /> Metamorphic Rocks<br />\
    <img src="styles/legend/GEOLOGYCLIP_2_1.png" /> Unconsolidated Sediments<br />\
    <img src="styles/legend/GEOLOGYCLIP_2_2.png" /> <br />' });
var format_SOILCLIP_3 = new ol.format.GeoJSON();
var features_SOILCLIP_3 = format_SOILCLIP_3.readFeatures(json_SOILCLIP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOILCLIP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOILCLIP_3.addFeatures(features_SOILCLIP_3);
var lyr_SOILCLIP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOILCLIP_3, 
                style: style_SOILCLIP_3,
                popuplayertitle: 'SOIL CLIP',
                interactive: true,
    title: 'SOIL CLIP<br />\
    <img src="styles/legend/SOILCLIP_3_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOILCLIP_3_1.png" /> Laterite Soil<br />\
    <img src="styles/legend/SOILCLIP_3_2.png" /> <br />' });
var format_DRAINAGECLIP_4 = new ol.format.GeoJSON();
var features_DRAINAGECLIP_4 = format_DRAINAGECLIP_4.readFeatures(json_DRAINAGECLIP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGECLIP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGECLIP_4.addFeatures(features_DRAINAGECLIP_4);
var lyr_DRAINAGECLIP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGECLIP_4, 
                style: style_DRAINAGECLIP_4,
                popuplayertitle: 'DRAINAGE CLIP',
                interactive: true,
    title: 'DRAINAGE CLIP<br />\
    <img src="styles/legend/DRAINAGECLIP_4_0.png" /> 0<br />\
    <img src="styles/legend/DRAINAGECLIP_4_1.png" /> 1<br />\
    <img src="styles/legend/DRAINAGECLIP_4_2.png" /> 2<br />\
    <img src="styles/legend/DRAINAGECLIP_4_3.png" /> <br />' });
var format_GEOMORCLIP_5 = new ol.format.GeoJSON();
var features_GEOMORCLIP_5 = format_GEOMORCLIP_5.readFeatures(json_GEOMORCLIP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORCLIP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORCLIP_5.addFeatures(features_GEOMORCLIP_5);
var lyr_GEOMORCLIP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORCLIP_5, 
                style: style_GEOMORCLIP_5,
                popuplayertitle: 'GEOMOR CLIP',
                interactive: true,
    title: 'GEOMOR CLIP<br />\
    <img src="styles/legend/GEOMORCLIP_5_0.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORCLIP_5_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORCLIP_5_2.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORCLIP_5_3.png" /> Stabilized channel bar (Flood Plain)<br />\
    <img src="styles/legend/GEOMORCLIP_5_4.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORCLIP_5_5.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORCLIP_5_6.png" /> <br />' });
var format_ROADCLIP_6 = new ol.format.GeoJSON();
var features_ROADCLIP_6 = format_ROADCLIP_6.readFeatures(json_ROADCLIP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADCLIP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADCLIP_6.addFeatures(features_ROADCLIP_6);
var lyr_ROADCLIP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADCLIP_6, 
                style: style_ROADCLIP_6,
                popuplayertitle: 'ROAD CLIP',
                interactive: true,
                title: '<img src="styles/legend/ROADCLIP_6.png" /> ROAD CLIP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_keezhmad_wards_1.setVisible(true);lyr_GEOLOGYCLIP_2.setVisible(true);lyr_SOILCLIP_3.setVisible(true);lyr_DRAINAGECLIP_4.setVisible(true);lyr_GEOMORCLIP_5.setVisible(true);lyr_ROADCLIP_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_keezhmad_wards_1,lyr_GEOLOGYCLIP_2,lyr_SOILCLIP_3,lyr_DRAINAGECLIP_4,lyr_GEOMORCLIP_5,lyr_ROADCLIP_6];
lyr_keezhmad_wards_1.set('fieldAliases', {'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', 'WARD_CODE': 'WARD_CODE', 'SOURCE': 'SOURCE', });
lyr_GEOLOGYCLIP_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_SOILCLIP_3.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_DRAINAGECLIP_4.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_GEOMORCLIP_5.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_ROADCLIP_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_keezhmad_wards_1.set('fieldImages', {'WARD_NO': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_CODE': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_GEOLOGYCLIP_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_SOILCLIP_3.set('fieldImages', {'id': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_DRAINAGECLIP_4.set('fieldImages', {'ORDER1': 'Range', });
lyr_GEOMORCLIP_5.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_ROADCLIP_6.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_keezhmad_wards_1.set('fieldLabels', {'WARD_NO': 'no label', 'WARD_NAME': 'no label', 'WARD_CODE': 'no label', 'SOURCE': 'no label', });
lyr_GEOLOGYCLIP_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_SOILCLIP_3.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_DRAINAGECLIP_4.set('fieldLabels', {'ORDER1': 'no label', });
lyr_GEOMORCLIP_5.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_ROADCLIP_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_ROADCLIP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});