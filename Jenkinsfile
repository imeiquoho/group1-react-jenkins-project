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
                sh 'docker rm -f group1-app-container || true'
                sh 'docker run -d --name group1-app-container -p 3003:3000 group1-app'
            }
        }
    }
}