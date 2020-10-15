<h1>Terceiro Dia </h1>
<h3>Passos para trabalhar com typescript e nodejs</3>

yarn add @types/express -D
yarn add typescript -D

<h3>Cria o arquivo de coniguração do TypeScript tsconfig.json</h3>

yarn tsc --init

yarn add ts-node-dev -D

<h2>Dependencias gerais do back-end</h2>

<p>Nesse caso foi utilizado o sqlite3, mas nada nos impede de trocar para mariaDB ou MySQL</p>



yarn add sqlite3
yarn add typeorm
yarn add multer
yarn add @types/multer -D
yarn add express-async-errors
yarn add yup
yarn add @types/yup -D
yarn add cors
yarn add @types/cors -D

Ir até o tsconfig e alterar a versão do ecma para 2017

e também deixar a seguinte config no arquivo:

"skipLibCheck": true,                     
"forceConsistentCasingInFileNames": true

ir no packge.json criar um sript personalizado

"scripts": {
		"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
	},
	"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

Para iniciar o projeto: 

yarn dev


para um bom ambiente de desenvolvimento foram recomendadas as ferramentas beekeeper e insomnia.




yarn typeorm migration:create -n create_orphanages

yarn typeorm migration:run

yarn typeorm migration:revert

yarn typeorm migration:create -n create_images

yarn typeorm migration:run

Comandos uteis: yarn typeorm migration:revert
volta o ultimo comando de migration, util para dropar a tabela caso precise de alterações