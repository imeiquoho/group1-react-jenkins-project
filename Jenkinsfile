pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t group1-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3003:3000 group1-app || true'
            }
        }
    }
}