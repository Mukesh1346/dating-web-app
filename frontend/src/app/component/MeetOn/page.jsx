import React from 'react';
import './meeton.css';
import { Download } from 'lucide-react';
import DownloadSection from '../Appdownload/DownloadSection';

export default function MeetOn() {
    return (
        <>
            <section className="MeetOnMainSec">
                <div className="MeetOnTextSec">
                    <div className="MeetOnTittle">
                        <h2>They Meet On LuvNestor</h2>
                    </div>
                    <div className="MeetOnDescription">
                        <p>
                            We are incredibly happy & proud to have sparked thousands of
                            encounters & beautiful love stories. So please share your story
                            with us! We need our daily love fix.
                        </p>
                    </div>
                    <button className="meet-btn">Coming Soon</button>
                </div>
            </section>
            <DownloadSection />
        </>
    );
}
