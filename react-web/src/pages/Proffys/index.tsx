import React, { useEffect, useState } from 'react';
import Icon, { AvailableIcons } from '@/components/atoms/img/Icon';
import { Link } from 'react-router-dom';

import Text, { TextSize } from '@/components/atoms/text/Text';

import Button from '@/components/atoms/button/Button';
import {
  Container,
  Header,
  Navbar,
  HeaderTextContainer,
  Main,
  Form,
  ProffysList,
  ProffysListItemHeader,
  ProffysListItemText,
  ProffysListItemFooter,
} from './styles';

interface Proffy {
  name: string,
  subject: string,
  description: string,
  price: number,
  phone_number: string,
  img_url: string,
}

const proffysMock = [
  {
    name: 'Matheus Caetano',
    subject: 'Vue.JS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laudantium minima vero fugiat eaque sequi quia amet, ipsam cumque accusantium voluptatum eligendi, cum harum aperiam hic quasi et magni?',
    price: 420.80,
    phone_number: '+5562994881143',
    img_url: 'https://avatars.githubusercontent.com/u/42914793?v=4',
  },
  {
    name: 'Diego Fernandes',
    subject: 'React',
    description: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    price: 20.00,
    phone_number: '+5562994881143',
    img_url: 'https://avatars.githubusercontent.com/u/2254731?v=4',
  },
];

const Proffys: React.FC = () => {
  const [proffys, setProffys] = useState<Proffy[]>([]);

  useEffect(() => {
    function loadProffys() {
      localStorage.setItem('@Proffys:proffys', JSON.stringify(proffysMock));
      const storagedProffys = localStorage.getItem('@Proffys:proffys');
      if (storagedProffys) setProffys(JSON.parse(storagedProffys));
    }

    loadProffys();
  }, []);

  function openWhatsappChat(proffy: Proffy) {
    alert('asdasd');
    window.open('https://youtube.com.br', '_blank');
  }

  return (
    <Container>
      <Header>
        <Navbar>
          <Link className="arrow-left" to="/">
            <Icon iconName={AvailableIcons.arrowLeft} size={60} />
          </Link>
          <Icon iconName={AvailableIcons.logo} size={60} />
        </Navbar>

        <HeaderTextContainer>
          <h2>Estes são os</h2>
          <h2>proffys disponíveis</h2>
        </HeaderTextContainer>
      </Header>

      <Main>
        <Form />
        <ProffysList>
          {proffys.length > 0 ? proffys.map((proffy, index) => (
            <li key={index}>
              <ProffysListItemHeader>
                <img src={proffy.img_url} alt="" />
                <div>
                  <h5>{proffy.name}</h5>
                  <ProffysListItemText>{proffy.subject}</ProffysListItemText>
                </div>
              </ProffysListItemHeader>

              <ProffysListItemText>{proffy.description}</ProffysListItemText>

              <ProffysListItemFooter>
                <div>
                  <Text size={TextSize.small}>Preço/hora</Text>
                  <h5>R$ {proffy.price}</h5>
                </div>

                <Button iconName={AvailableIcons.whatsapp} onClick={() => openWhatsappChat(proffy)}>
                  Entrar em contato
                </Button>
              </ProffysListItemFooter>
            </li>
          )) : (
            <Text className="no-proffys" size={TextSize.small}>Nenhum proffy disponível :/</Text>
          )}
        </ProffysList>
      </Main>
    </Container>
  );
};

export default Proffys;
