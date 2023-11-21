pipeline {
    agent any

    stages {
        stage('Preparación') {
            steps {
                // Clona el repositorio usando el comando git clone
                sh 'git clone https://github.com/alejandroaperez1994g/cloudflare_vie.git'

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
