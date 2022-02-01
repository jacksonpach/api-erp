if [ "$1" = '' ]; then
docker-compose up -d
fi

if [ "$1" = 'down' ]; then
docker-compose down
fi

if [ "$1" = 'restart' ]; then
docker-compose down && docker-compose up -d
fi

if [ "$1" = 'build' ]; then
docker-compose build
fi

if [ "$1" = 'rb' ]; then
docker-compose down && docker-compose up -d --build
fi


