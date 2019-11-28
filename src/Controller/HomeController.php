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

    /**
     * @Route("/about-me", name="about-me")
     */
    public function aboutMeAction()
    {

        return $this->render('aboutMe.html.twig');
    }

    /**
     * @Route("/skills", name="skills")
     */
    public function skillsAction()
    {

        return $this->render('skills.html.twig');
    }
}