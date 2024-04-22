import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";

function ProfileModal({ modalOpened, setModalOpened }) {
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
        <form className="infoForm">
          <h3>Your info</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="FirstName"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksaT"
              placeholder="Works at"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIn"
              placeholder="Lives In"
            />

            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="RelationShip Status"
            />
          </div>

          <div>
            Profile Images 
            <input type="file" name="profileImg"/>
            Cover Image
            <input type="file" name="coverImg"/>
          </div>

          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
