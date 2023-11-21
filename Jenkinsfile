pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Preparación') {
            steps {

                // Cambia al directorio del repositorio clonado

                    // Verifica que estás en la rama correcta
                sh 'git checkout development'

                    // Trae los últimos cambios del repositorio
                sh 'git pull origin development'

            }
        }
        stage('Instalar dependencias') {
            steps {

                    sh 'npm install'

            }
        }

        stage('Ejecutar tests') {
            steps {

                    sh 'npm test'

            }
        }
    }
}
