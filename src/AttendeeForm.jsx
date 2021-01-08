import React from 'react'
import countries from './utils/countries'

// IMAGES
import cluster from '../dist/assets/cluster.png'
import asobanca from '../dist/assets/asobanca.png'
import ipbf from '../dist/assets/ipbf.jpg'
import hightelecom from '../dist/assets/hightelecom.png'
import ebanx from '../dist/assets/ebanx.png'
import zendesk from '../dist/assets/zendesk.jpg'

import twitter from '../dist/assets/twitter-4-128.png'
import facebook from '../dist/assets/facebook-4-128.png'
import youtube from '../dist/assets/youtube-4-128.png'
import linkedin from '../dist/assets/linkedin-4-128.png'
import instagram from '../dist/assets/instagram-4-128.png'

// STYLES
import { 
	Layout, 
	Typography, 
	Row, 
	Col, 
	List, 
	Avatar,
	Form,
	Input,
	Select,
	Button,
} from 'antd';

const { Title, Text } = Typography;
const { Header, Footer, Content } = Layout;

const data = [ 
	{
		title: 'José Perez',
		content: 'Presidente'
	},
	{
		title: 'José Perez',
		content: 'Customer Service Senior Manager'
	},
	{
		title: 'José Perez',
		content: 'Senior Customer Success Consultant'
	},
	{
		title: 'José Perez',
		content: 'Gerente de Consultoría de Soluciones'
	},
  ];
  
export default ({attendeeData, setAttendeeData,  handleChange, handleSubmit}) => {

  const [form] = Form.useForm();
  
	return (

	<Layout>
      <Header className='header-container'>
		  <Row>
		  	<Col className='header-col' span={24}>
				<Text className='header-webinar-button'>WEBINAR</Text>
				<Title level={2} className='header-titles'>El reto de humanizar el CX financiero en 2021.</Title>
				<Title level={2} className='header-titles header-title-italic'>La experiencia de un Unicornio de Latam</Title>
				<Title level={5} className='header-titles header-title-semiBold'>MIÉRCOLES 16 DE DICIEMBRE | 17 HS (HORARIO DE QUITO)</Title>
			</Col>
		  </Row>
	  </Header>
      <Content className='content-container'>
	  	<Row>
		  	<Col xs={0} sm={0} md={2} lg={2} xl={3}></Col>
			<Col xs={24} sm={24} md={9} lg={9} xl={8}>
				<Row id='sponsors-images-container'>
					<img src={cluster} alt='cluster' className='sponsors-image' style={{ marginLeft: 0}}/>
					<img src={asobanca} alt='asobanca' className='sponsors-image'/>
					<img src={ipbf} alt='ipbf' className='sponsors-image' style={{height: '2rem'}}/>
					<img src={hightelecom} alt='hightelecom' className='sponsors-image'/>
					<img src={ebanx} alt='ebanx' className='sponsors-image'/>
					<img src={zendesk} alt='zendesk' className='sponsors-image' style={{height: '2rem', margin: 0}}/>
				</Row>
				<Row>
					<Text className='text-content'>
					Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
					</Text>
					<Text className='text-content'>
					Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
					</Text>
					<Text className='text-content'>
					Escucha de primera mano la voz de nuestros especialistas:
					</Text>
				</Row>
				<Row>
				<List
					itemLayout="horizontal"
					dataSource={data}
					className='content-list-speakers'
					size='large'
					split={false}
					renderItem={item => (
					<List.Item className='list-item'>
						<List.Item.Meta
						className='list-item-data'
						avatar={<Avatar size={55} />}
						title={item.title}
						description={item.content}
						/>
					</List.Item>
				)}
				/>
				</Row>
				<Row>
				<Text className='text-content'>
				Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
				</Text>		
				<Text className='text-content'>
				¡Te esperamos!
				</Text>	
				</Row>
				<Row id='sponsors-images-container'>
					<img src={cluster} alt='cluster' className='sponsors-image' style={{ marginLeft: 0}}/>
					<img src={asobanca} alt='asobanca' className='sponsors-image'/>
					<img src={ipbf} alt='ipbf' className='sponsors-image' style={{height: '2rem'}}/>
					<img src={hightelecom} alt='hightelecom' className='sponsors-image'/>
					<img src={ebanx} alt='ebanx' className='sponsors-image'/>
					<img src={zendesk} alt='zendesk' className='sponsors-image' style={{height: '2rem', margin: 0}}/>
				</Row>
			</Col>
			<Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
			<Col xs={24} sm={24} md={9} lg={9} xl={8}>
			<Form
				form={form}
				onFinish={() => {
					handleSubmit()
					form.resetFields()
				}}
				requiredMark={false}
				layout='vertical'
				className='form-container'
				scrollToFirstError
				>
				<Form.Item className='form-title'>
					<Text> ¡Inscríbete y reserva tu lugar ahora!</Text>
				</Form.Item>
				<Form.Item
				name="name"
				label="Nombre:"
				rules={[ 
					{ 
					required: true, 
					message: 'Por favor, ingrese su nombre',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.name}/>
				</Form.Item>
				<Form.Item
				
				name="lastName"
				label="Apellido:"
				rules={[
					{ 
					required: true, 
					message: 'Por favor, ingrese su apellido',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.lastName} />
				</Form.Item>
				<Form.Item
					name="email"
					label="Correo electrónico del trabajo:"
					rules={[
					{
						type: 'email',
						message: 'El email ingresado no es válido',
					},
					{
						required: true,
						message: 'Por favor, ingrese un email',
					},
					]}
				>
					<Input onChange={handleChange} value={attendeeData.email}/>
				</Form.Item>
				<Form.Item
					name="country"
					label="País:"
					rules={[
					{ 
						required: true, 
						message: 'Por favor, seleccione un país' 
					}
					]}
				>
					<Select 
					onChange={(value) => setAttendeeData({...attendeeData, country: value})} 
					value={attendeeData.country}>
						{countries()}
					</Select>
				</Form.Item>
				<Form.Item
					name="phone"
					label="Número de teléfono:"
					rules={[{ required: true, message: 'Por favor, ingrese un número de teléfono' }]}
				>
					<Input onChange={handleChange} value={attendeeData.phone}/>
				</Form.Item>
				<Form.Item
				name="jobTitle"
				label="Puesto de trabajo:"
				rules={[
					{ 
					required: true, 
					message: 'Por favor, ingrese su puesto de trabajo',
					} 
				]}
				>
					<Input onChange={handleChange} value={attendeeData.jobTitle}/>
				</Form.Item>
				<Form.Item>
					<Button type="default" htmlType="submit" id='form-button-submit'>
					Inscríbete
					</Button>
				</Form.Item>
			</Form>
			</Col>
			<Col xs={0} sm={0} md={2} lg={2} xl={3}></Col>
		</Row>
	  </Content>
      <Footer id='footer-container'>
		  <Row id='footer-row'>
			  <Col xs={24} sm={4} md={4} lg={4} xl={4} id='copyright'>
			  	<Text>© 2020</Text>
			  </Col>
			  <Col xs={24} sm={20} md={20} lg={20} xl={20} id='social-column'>
				  <div id='social-container'>
					<img className='footer-images' src={twitter}/>
					<img className='footer-images' src={facebook}/>
					<img className='footer-images' src={youtube}/>
					<img className='footer-images' src={instagram}/>
					<img className='footer-images' src={linkedin}/>
				  </div>
			  </Col>
		  </Row>
	  </Footer>
    </Layout>

	)
}
