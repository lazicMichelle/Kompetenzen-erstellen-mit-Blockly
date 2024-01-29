Wenn lokal laufen lassen folgende Schritte beachten:
notwendig durch trennung der html in zwei sonst CORS Probleme im Browser (Cross-Origin Resource Sharing)

1. Einfacher Webserver notwendig
   - in Terminal folgender Befehl: npm install -g http-server
   - zu Verzeichnis navigieren wo Projekt sich befindet (cd, .html Dateien)
   - in Terminal folgender Befehl: http-server
   - angegebene URLs verwenden

2. Ohne Webserver
   - html-Code aus toolbox.html in die index.html kopieren 
     "<div id="toolboxDiv"></div>
     <script>
        loadExternalContent('toolbox.html', 'toolboxDiv');
     </script>" --> ersetzen mit <xml>-code aus toolbox.html



     save ----------------------------

     // import blocks
import {
    b_id, b_lerntyp, person_a, person_s, person_as, dim_wissen, dim_verstehen, dim_anwenden, dim_vermitteln, dim_erschaffen, dim_analysieren, dim_bewerten, dim_verfuegen,
    b_text_1, b_text_2, b_group, b_abh
} from './tb_blocks';