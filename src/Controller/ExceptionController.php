<?php

namespace App\Controller;


use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ExceptionController extends AbstractController
{
    /**
     * @Route("/error", name="error")
     */
    public function showAction()
    {
        return $this->render('index.html.twig');
    }
}