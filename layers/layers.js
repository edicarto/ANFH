var wms_layers = [];

var format_Departements_0 = new ol.format.GeoJSON();
var features_Departements_0 = format_Departements_0.readFeatures(json_Departements_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departements_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departements_0.addFeatures(features_Departements_0);
var lyr_Departements_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departements_0, 
                style: style_Departements_0,
                interactive: true,
                title: '<img src="styles/legend/Departements_0.png" /> Departements'
            });
var format_Etablissements_1 = new ol.format.GeoJSON();
var features_Etablissements_1 = format_Etablissements_1.readFeatures(json_Etablissements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etablissements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissements_1.addFeatures(features_Etablissements_1);
var lyr_Etablissements_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etablissements_1, 
                style: style_Etablissements_1,
                interactive: true,
                title: '<img src="styles/legend/Etablissements_1.png" /> Etablissements'
            });
var format_Effectif_2 = new ol.format.GeoJSON();
var features_Effectif_2 = format_Effectif_2.readFeatures(json_Effectif_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Effectif_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Effectif_2.addFeatures(features_Effectif_2);
var lyr_Effectif_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Effectif_2, 
                style: style_Effectif_2,
                interactive: true,
                title: '<img src="styles/legend/Effectif_2.png" /> Effectif'
            });

lyr_Departements_0.setVisible(true);lyr_Etablissements_1.setVisible(true);lyr_Effectif_2.setVisible(true);
var layersList = [lyr_Departements_0,lyr_Etablissements_1,lyr_Effectif_2];
lyr_Departements_0.set('fieldAliases', {'nom': 'nom', 'numero': 'numero', });
lyr_Etablissements_1.set('fieldAliases', {'code etbt': 'code etbt', 'nom etbt': 'nom etbt', 'adresse': 'adresse', 'cp': 'cp', 'commune': 'commune', });
lyr_Effectif_2.set('fieldAliases', {'code etbt': 'code etbt', 'nom etbt': 'nom etbt', 'adresse': 'adresse', 'cp': 'cp', 'commune': 'commune', 'effectif': 'effectif', });
lyr_Departements_0.set('fieldImages', {'nom': '', 'numero': '', });
lyr_Etablissements_1.set('fieldImages', {'code etbt': '', 'nom etbt': '', 'adresse': '', 'cp': '', 'commune': '', });
lyr_Effectif_2.set('fieldImages', {'code etbt': '', 'nom etbt': '', 'adresse': '', 'cp': '', 'commune': '', 'effectif': '', });
lyr_Departements_0.set('fieldLabels', {'nom': 'header label', 'numero': 'inline label', });
lyr_Etablissements_1.set('fieldLabels', {'code etbt': 'header label', 'nom etbt': 'inline label', 'adresse': 'inline label', 'cp': 'inline label', 'commune': 'inline label', });
lyr_Effectif_2.set('fieldLabels', {'code etbt': 'header label', 'nom etbt': 'inline label', 'adresse': 'inline label', 'cp': 'inline label', 'commune': 'inline label', 'effectif': 'inline label', });
lyr_Effectif_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});