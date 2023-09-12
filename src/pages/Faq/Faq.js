import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsibleOpen from '../../hooks/CollapsibleOpen';
import CollapsibleTrigger from '../../hooks/CollapsibleTrigger';
import MenuNavegacao from '../../components/MenuNavegacao/menuNavegacao';
import FetchFaq from '../../hooks/FetchFAQ';
import './Faq.css';
import Header from '../../components/Header/header';

export default function Faq() {
  return (
    <div>
      <MenuNavegacao />
      <Header texto="Perguntas Frequentes"/>
      <section className="faq--caixa__perguntas">
        <FetchFaq
          render={(arrFaq) =>
            arrFaq.map((faqs) => (
              <Collapsible
                key={faqs.id}
                trigger={<CollapsibleTrigger text={faqs.trigger} page="FAQ" />}
                triggerWhenOpen={<CollapsibleOpen text={faqs.trigger} page="FAQ" />}
              >
                <p className="faq-resposta">{faqs.resposta}</p>
              </Collapsible>
            ))
          }
        />
      </section>
    </div>
  );
}
