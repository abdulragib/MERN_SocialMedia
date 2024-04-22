import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";
import PostShare from "../PostShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="55%"
      >
        {/* Modal content */}
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModal;
