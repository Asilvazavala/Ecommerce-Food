"use client";

import { Modal } from "./ui/modal";

const Dashboard: React.FC = () => {
  return (
    <section>
      <Modal 
        title="Test"
        description="Desc"
        isOpen
        onCLose={() => {}}
      >
        Children
      </Modal>
    </section>
  )
};

export default Dashboard;