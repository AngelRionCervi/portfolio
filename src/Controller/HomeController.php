<?php

namespace App\Controller;


use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\HttpFoundation\Request;
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

    /**
     * @Route("/contact", name="contact")
     */
    public function contactAction(Request $request, \Swift_Mailer $mailer)
    {

        $defaultData = [];
        $formContact = $this->createFormBuilder($defaultData)
            ->add('email', EmailType::class, [
                    'attr' => [
                        'placeholder' => 'Email',
                    ]
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'Message',
                ]
            ])
            ->getForm();

        $formContact->handleRequest($request);

        if ($formContact->isSubmitted() && $formContact->isValid()) {
            $data = $formContact->getData();
            $message = (new \Swift_Message())
                ->setFrom('a.rioncervi@gmail.com')
                ->setTo('a.rioncervi@gmail.com')
                ->setSubject('someone wrote something from you portfolio you should open this now')
                ->setBody(
                    "from: " . $data['email'] . "\n\n" . $data['message']
            );

            $mailer->send($message);

            return $this->render('contact.html.twig', [
                'form' => $formContact->createView(),
                'messaged' => true
            ]);
        }

        return $this->render('contact.html.twig', [
            'form' => $formContact->createView(),
            'messaged' => false
        ]);
    }

    /**
     * @Route("/projects", name="projects")
     */
    public function projectsAction()
    {
        $projectsJson = file_get_contents("../assets/json/projects.json");
        $projects = json_decode($projectsJson, true);

        return $this->render('projects.html.twig', [
            "projects" => $projects
        ]);
    }
}