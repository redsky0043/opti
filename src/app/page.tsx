import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Slider } from '@/components/Slider/Slider'
import { Services } from "@/components/Services/Services"
import { Vertically } from "@/components/Vertically/Vertically"
import { ContactsUs } from "@/components/ContactsUs/ContactsUs"
import { ContactsForm } from "@/components/ContactsForm/ContactsForm"

export default function Home() {
    return (
        <main>
            <Hero/>
            <div className="section-wrapper" id="services">
                <Slider/>
                <ContactsForm/>
                <Services/>
                <About/>
                <Vertically/>
                <ContactsUs/>
            </div>
        </main>
    )
}
