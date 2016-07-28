
Get data from db depending on user search use ajax get method

// ---- Polish
Zadanie polega na tym by wpisac imie wyslac je getem do pliku getName.php ktory zapta baze danych o lokalizacje dla tego imienia
np: Greg London Stanislaw Bielsko itd
// ----

You need mysql db called ajaxdb and table called name

CREATE TABLE `names` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '',
  `location` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;