<?php

namespace App\Controller;


use Mobile_Detect;
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
        $detect = new Mobile_Detect;

        if($detect->isMobile() || $detect->isTablet()) {

            return $this->redirectToRoute('mobile');

        } else {

            return $this->render('index.html.twig');
        }
    }

    /**
     * @Route("/m", name="mobile")
     */
    public function mobileVer(Request $request, \Swift_Mailer $mailer) {

        $projectsJson = file_get_contents("../assets/json/projects.json");
        $projects = json_decode($projectsJson, true);

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

            return $this->render('mobile/index.html.twig', [
                'form' => $formContact->createView(),
                'messaged' => true,
                'projects' => $projects
            ]);
        }

        return $this->render('mobile/index.html.twig', [
            'form' => $formContact->createView(),
            'messaged' => false,
            'projects' => $projects
        ]);
    }

    /**
     * @Route("/about-me", name="about-me")
     */
    public function aboutMeAction()
    {

        $detect = new Mobile_Detect;

        if($detect->isMobile() || $detect->isTablet()) {

            return $this->redirectToRoute('mobile');

        } else {

            return $this->render('aboutMe.html.twig');
        }
    }

    /**
     * @Route("/skills", name="skills")
     */
    public function skillsAction()
    {

        $detect = new Mobile_Detect;

        if($detect->isMobile() || $detect->isTablet()) {

            return $this->redirectToRoute('mobile');

        } else {

            return $this->render('skills.html.twig');
        }
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contactAction(Request $request, \Swift_Mailer $mailer)
    {

        $detect = new Mobile_Detect;

        if($detect->isMobile() || $detect->isTablet()) {

            return $this->redirectToRoute('mobile');

        } else {
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
                'messaged' => false,
            ]);

        }

    }

    /**
     * @Route("/projects", name="projects")
     */
    public function projectsAction()
    {

        $detect = new Mobile_Detect;

        if($detect->isMobile() || $detect->isTablet()) {

            return $this->redirectToRoute('mobile');

        } else {

            $projectsJson = file_get_contents("../assets/json/projects.json");
            $projects = json_decode($projectsJson, true);

            return $this->render('projects.html.twig', [
                "projects" => $projects
            ]);
        }
    }
}