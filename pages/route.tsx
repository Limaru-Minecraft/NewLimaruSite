import React from "react";
import Head from "@/components/Head";
import PageLayout from "@/components/PageLayout";
import SectionBox from "@/components/SectionBox";
import UnderConstruction from "@/components/LayoutComponents/UnderConstruction";
import Heading from "@/components/LayoutComponents/Heading";
import Pathfinder from "@/components/transportation/pathfinder";
import Status from "@/components/transportation/status";
import Route from "@/components/transportation/route";

const Home: React.FC = () => (
    <>
        <Head
            title="Route Query | Limaru"
            description="Pathfinder is help you to find which route you need to be taken."
            author="winsanmwtv"
            keywords="limaru, limaru city server, limaru minecraft server, transport limaru, limaru transport"
        />
        <PageLayout title="Metro Route Finder">
            <SectionBox>
                <UnderConstruction type="page" />
            </SectionBox>
            <SectionBox >
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <Pathfinder/>
                </div>

            </SectionBox>

            <SectionBox >
                <div style={{ position: 'relative', zIndex: 1 }}><Route/></div>

            </SectionBox>
        </PageLayout>
    </>
);

// @ts-ignore
export default Home;
