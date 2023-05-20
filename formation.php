<?php require_once('./template/header.php');

$formations = [
    ["année" => "1998-2001", "lieu" => "Lycée la pleïade - Pont de Cheruy (38)", "description" => "J'ai débuté par une seconde générale, j'ai continué mon lycée en 1ère puis Terminale STech.", "diplôme" => "mon Bac Stech."],
    ["année" => "2001-2004", "lieu" => "IUT A - Lyon I (69)", "description" => "Après mon lycée, je me suis dirigé vers le bâtiment car je cotoyais ce milieu de part le travail de mon père. C'était également un secteur avec de nombreuses opportunités d'emploi et très porteur.", "diplôme" => "mon DUT Génie civil option RTA."],
    ["année" => "2004-2005", "lieu" => "IUT A - Lyon I (69)", "description" => "Suite à mon DUT, j'ai souhaité poursuivre afin d'avoir un niveau de diplôme à BAC+3 et le côté chiffrage et étude de prix m'avait attiré à ce moment là.", "diplôme" => "ma Licence Pro Economie de la construction."]
];
?>
<section>
    <h2>Toutes mes formations...</h2>
    <ul class="formation">
        <?php foreach ($formations as $formation) {
            ?>
            <li><p><strong><?= $formation["année"]?></strong><?=" - ".$formation["lieu"]?></p><p><?=$formation["description"]." J'ai ainsi obtenu ".$formation["diplôme"]; ?></p></li>
            <?php
        }
        ?>
    </ul>
</section>
<p><a class="back_home" href="./index.php">Retour à l'accueil</a></p>

<?php require_once('./template/footer.php');?>