# ProjectManagementBoardReact

Bienvenue sur le projet **ProjectManagementBoardReact** ! Il s'agit d'une application de gestion de projet conçue pour aider les équipes à suivre et à gérer leurs tâches.

## Introduction

Cette application est construite avec React et offre une interface de tableau Kanban pour gérer les tâches. Vous pouvez déplacer les tâches entre différentes colonnes telles que "To Do", "In Progress", "Review" et "Done".

## Fonctionnalités principales

- **[Header](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/components/Header/Header.js)** : Affiche le titre "Project Management Board".

- **[Board](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/pages/Board/Board.js)** : C'est la page principale qui affiche le tableau Kanban. Elle utilise plusieurs composants `Lane` pour afficher les différentes colonnes.

- **[Lane](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/components/Lane/Lane.js)** : Représente une colonne du tableau. Chaque colonne contient plusieurs tâches que vous pouvez déplacer entre les colonnes.

- **[Task](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/components/Task/Task.js)** : Représente une tâche individuelle. Vous pouvez glisser et déposer ces tâches entre différentes colonnes.

- **[Backlog](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/pages/Backlog/Backlog.js)** : Affiche une liste de tâches en attente qui n'ont pas encore été ajoutées au tableau.

- **[useDataFetching](https://github.com/GuiFraV/ProjectManagementBoardReact/blob/master/src/hooks/useDataFetching.js)** : Un hook personnalisé pour récupérer les données depuis une source externe.

## Comment ça marche ?

Lorsque vous lancez l'application, elle récupère une liste de tâches depuis une API externe. Ces tâches sont ensuite affichées dans le tableau Kanban, où vous pouvez les déplacer entre différentes colonnes en fonction de leur statut.

## Conclusion

J'espère que cette application vous aidera à gérer efficacement vos projets et vos tâches. N'hésitez pas à contribuer ou à donner vos retours !
