// Remova o campo class dos documentos que possuem esse campo com o valor unknown.
db.xmen.updateMany({class: "unknow"}, {$unset: {class: ""}, $currentDate: {lastUpdate: {$type: "timestamp"} } });

