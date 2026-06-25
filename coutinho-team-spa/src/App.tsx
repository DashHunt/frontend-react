import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Beneficios from './components/Beneficios';
import Equipe from './components/Equipe';
import Atletas from './components/Atletas';
import Planos from './components/Planos';
import Depoimentos from './components/Depoimentos';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import { Modal } from './components/ui/Modal';

interface ModalState {
  isOpen: boolean;
  plan: string;
}

function App() {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, plan: '' });

  const openModal = (plan: string) => setModal({ isOpen: true, plan });
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Beneficios />
        <Equipe />
        <Atletas />
        <Planos onSelectPlan={openModal} />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <Modal isOpen={modal.isOpen} selectedPlan={modal.plan} onClose={closeModal} />
    </>
  );
}

export default App;
