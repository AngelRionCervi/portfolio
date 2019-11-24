<?php

namespace App\Controller;


use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction()
    {

        $projectsJson = file_get_contents("../assets/json/projects.json");
        $projects = json_decode($projectsJson, true);


        return $this->render('index.html.twig', [
            "projects" => $projects
        ]);
    }
}