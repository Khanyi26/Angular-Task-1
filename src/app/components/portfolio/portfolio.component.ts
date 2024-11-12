import { Component, OnInit } from '@angular/core';

interface project {
  title: string;
  description: string;
  image: string;
  link: string; 
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: project[] = [
    {
      title: 'New York City Taxi Trip Duration',
      description:"The New York City Taxi Duration Prediction project aims"+
                  "to predict the duration of taxi trips in the city. "+

                  "Leveraging historical taxi trip data, including drop-off location,"+
                  "timestamps, and other relavant features, machine learning models are"+
                  "developed to forecast the duration of future taxi rides accurately. "+

                  "by understanding and predicting taxi trip durations, this project"+
                  "contributes to improving transportation efficiency, optimizing route"+
                  "planning, and enhancing overall user experiencefoe taxi"+
                  "passengers and drivers in New York City.",
      image: 'src\app\components\Assets\khanyi.jpg',
      link:"https://github.com/khanyi26/NYC-Taxi-Trip-Duration-"
    },

    {
      title: 'Sport Complex Booking System',
      description:"The Sport Complex Booking System project aims to develop a comprehensive"+
                  "database solution for managing bookings and reservations at a sport complex."+
                  "the system facilitates the efficient scheduling of various sports facilities,"+
                  "such as courts, fields, or gymnasiums, allowing users to reserve slots for"+
                  "their desired activities.",
      image: 'src\app\components\Assets\khanyi.jpg',
      link: 'https://github.com/khanyi26/Database-Projects'
    },

    {
      title: 'Machine Learning Projects',
      description:"Machine Learning Projects contains both classification and regression tasks,"+
                  "for both classification and regression datasets the baseline models offer simplicity"+
                  "and ease of interpretation, the k-NN models provide a more flexible and data-driven"+
                  "approach for both classification and regression tasks.",
      image: 'src\app\components\Assets\khanyi.jpg',
      link: 'https://github.com/khanyi26/Machine-learning'
    }
   
  ];
  constructor() {}
   
  ngOnInit(): void {}
}

