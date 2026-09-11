pipeline {

    agent any

    tools {
        nodejs 'Node22'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint...'
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Vite application...'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t sri-durga-matha-varnish:latest .'
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo 'PIPELINE SUCCESSFUL!'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'PIPELINE FAILED!'
            echo 'Check the console output.'
            echo '======================================'
        }
    }
}