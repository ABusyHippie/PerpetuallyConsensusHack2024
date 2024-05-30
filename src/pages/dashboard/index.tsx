//@ts-nocheck
import React, { useEffect, useState } from "react";
import { TabItem } from "../../components/TabItem";
import { WalletConnection } from "../../components/WalletConnection";
import { NavigationItem } from "../../components/NavigationItem";
import { Perpetually } from "../../icons/Perpetually";
import { MobiusBackground } from "../../icons/MobiusBackground";
import { GrowPlantsHomeGarden1 } from "../../icons/GrowPlantsHomeGarden1";
import { SecurityVault1 } from "../../icons/SecurityVault1";
import { IconPlus3 } from "../../icons/IconPlus3";
import { Bye1 } from "../../icons/Bye1";
import { IconEdit1 } from "../../icons/IconEdit1";
import { BusinessDeal1 } from "../../icons/BusinessDeal1";
import { CryptowalletsShowing1 } from "../../icons/CryptowalletsShowing1";
import { ConnectButton, useActiveAccount, useSendTransaction } from "thirdweb/react";
import { createThirdwebClient, getContract, resolveMethod, prepareContractCall } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "../..";
import { ethereum } from "thirdweb/chains";
import { getWalletBalance } from "thirdweb/wallets";
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Header,
    Image,
    Modal,
    Label,
    Icon,
    Loader,
    Message,
    MessageHeader,
} from 'semantic-ui-react'
import BenificiaryForm from "../../components/beneficiaryform";
import DeathSwitchForm from "../../components/deathswitchform";

const deathswitchContent = [{
    id: 1,
    name: "deathswitch",
    active: true,
    type: "timer"
}]

export const Dashboard = (): JSX.Element => {
    const account = useActiveAccount();
    console.log(account, "account ")
    const [balance, setBalance] = useState();
    const [open, setOpen] = React.useState(false)
    const [modelType, setModelType] = useState()
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [benefValues, setBenefValues] = useState({
        name: "",
        email: "",
        address: ""
    })
    const [deathswitch, setDeathswitch] = useState([])

    const somefunc = () => {
        setSuccess(true)
    }
    const addDeathSwitch = () => {
        setDeathswitch(deathswitchContent)
        setTimeout(() => {
            // somefunc()
            call()
        }, 10000)
    }


    const deathSwitchSuccess = <Message positive>
        <MessageHeader>Death Switch triggered</MessageHeader>
        <p>
            Funds has been transferred to the selected beneficiaries
        </p>
    </Message>

    const handleChange = name => e => {
        setBenefValues({ ...benefValues, [name]: e.target.value })
    }
    //@ts-nocheck
    const getBalance = async () => {
        const balance = await getWalletBalance({
            account,
            client,
            chain: ethereum,
            address: account?.address
        });
        setBalance(balance)
    }

    const addBeneficiary = (data: { name: string, address?: string, email: string }) => {
        let items = localStorage.getItem("beneficiaries")
        items = items ? JSON.parse(items) : [];
        items.push(data);
        let updatedItems = JSON.stringify(items);
        localStorage.setItem('beneficiaries', updatedItems);
        setBenefValues({
            name: "",
            email: "",
            address: ""
        })
    }

    let beneficiaries = JSON.parse(localStorage.getItem("beneficiaries"))


    const modelComp = <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
    >
        {modelType === "beneficiary" && <BenificiaryForm handleChange={handleChange}> </BenificiaryForm>}
        {modelType === "deathswitch" && <DeathSwitchForm handleChange={handleChange}> </DeathSwitchForm>}
        <ModalActions>
            <Button color='black' onClick={() => setOpen(false)}>
                Nope
            </Button>
            <Button
                content="Add"
                labelPosition='right'
                icon='plus'
                onClick={() => modelType === "beneficiary" ? addBeneficiary(benefValues) : addDeathSwitch()}
                positive
            />
        </ModalActions>
    </Modal>

    useEffect(() => {
        account?.address && getBalance(account?.address)
    }, [account])

    console.log(balance, " balance")

    function removeItemFromLocalStorage(name) {
        setLoading(true)
        // Retrieve the current array from localStorage
        let items = localStorage.getItem('beneficiaries');

        // Parse the JSON string into a JavaScript array
        items = items ? JSON.parse(items) : [];

        // Find the index of the object you want to remove within the array
        let itemIndex = items.findIndex(item => item.name === name);

        // Remove the found object if it exists
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
        } else {
            console.log('Item not found');
        }

        // Stringify the updated array back into a JSON string
        let updatedItems = JSON.stringify(items);

        // Store the updated JSON string back in localStorage
        localStorage.setItem('beneficiaries', updatedItems);

        // For demonstration: Log the updated items to the console
        console.log(JSON.parse(localStorage.getItem('beneficiaries')));
        setLoading(false)
    }

    const contract = getContract({
        client,
        chain: defineChain(31),
        address: "0x2c962b86727445A321E0D48E616D73c862947C6c"
    });

    console.log(contract, "contract")

    const { mutate: sendTransaction, isLoading, isError } = useSendTransaction();

    const call = async () => {
        if (isLoading) {
            // do the loading
        } else {
            const transaction = await prepareContractCall({
                contract,
                method: resolveMethod("distribute()"),
                params: []
            });
            console.log(transaction, "prepareContractCall")
            try {
                const res = await sendTransaction(transaction);
                console.log(res)
            } catch (err) {
                console.log(err)
            }

            console.log(isError, "isError")
            somefunc()
        }
    }

    return (
        <div className="" data-semantics-mode="dark">
            {modelComp}
            <div className="absolute w-[1439px] h-[72px] top-0 left-0 bg-semantics-background border-b [border-bottom-style:solid] border-[color:var(--semantics-border)]">
                <Perpetually className="!absolute !w-[138px] !h-6 !top-6 !left-[156px]" />
                <div className="gap-6 absolute top-[26px] left-[590px] inline-flex items-center">
                    <NavigationItem className="!flex-[0_0_auto]" label="Portfolio" state="active" />
                    <NavigationItem className="!flex-[0_0_auto]" label="Beneficiaries" state="enabled" />
                    <NavigationItem className="!flex-[0_0_auto]" label="Directives" state="enabled" />
                </div>
                {/* <WalletConnection
                    showIcon
                    address="0x86rk...tj78"
                    className="!absolute !left-[1142px] !top-4"
                    connected
                    stateProp="enabled"
                /> */}
            </div>
            {success && deathSwitchSuccess}
            {/* <div className="flex flex-col w-[1128px] h-[236px] items-center justify-center p-4 absolute top-[616px] left-[156px] bg-[color:var(--semantics-highlight)] rounded-md overflow-hidden">
        <MobiusBackground className="!absolute !w-[1128px] !h-[236px] !top-0 !left-0" />
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-subtle font-[number:var(--subtle-font-weight)] text-semantics-primary-primary-foreground text-[length:var(--subtle-font-size)] text-center tracking-[var(--subtle-letter-spacing)] leading-[var(--subtle-line-height)] [font-style:var(--subtle-font-style)]">
            Intro
          </div>
          <div className="relative self-stretch font-h-1 font-[number:var(--h-1-font-weight)] text-semantics-primary-primary-foreground text-[length:var(--h-1-font-size)] text-center tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
            Get to know perpetually
          </div>
          <GrowPlantsHomeGarden1 className="!absolute !w-[172px] !h-[172px] !-top-11 !left-[883px]" />
        </div>
      </div> */}
            <div className="inline-flex flex-col items-start gap-6 absolute top-[388px] left-[156px]">
                <div className="flex w-[1128px] h-10 items-center gap-6 relative">
                    <div className="relative flex-1 font-h-2 font-[number:var(--h-2-font-weight)] text-[color:var(--semantics-foreground)] text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                        Perpetual contracts
                    </div>
                    <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                        <div className="inline-flex items-center p-[5px] relative flex-[0_0_auto] bg-[color:var(--semantics-muted)] rounded-[var(--primitives-number-6)]">
                            <TabItem className="!flex-[0_0_auto]" label="Directives" selected />
                            <TabItem className="!flex-[0_0_auto]" label="Beneficiaries" selected={false} />
                        </div>
                        <Button showIcon className="!flex-[0_0_auto]" label="Add contract" stateProp="disabled" type="primary" />
                    </div>
                </div>
                <div className="flex-col h-[148px] gap-2 px-0 py-12 bg-[color:var(--semantics-card)] rounded-[var(--semantics-radius)] border border-solid border-[color:var(--semantics-border)] flex items-center justify-center relative self-stretch w-full">
                    <SecurityVault1 className="!relative !w-20 !h-20 !mt-[-30.00px]" />
                    <div className="relative w-fit mb-[-29.00px] font-body font-[number:var(--body-font-weight)] text-semantics-muted-foreground text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
                        No directives created yet
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[360px] h-[236px] items-start absolute top-[120px] left-[924px] bg-[color:var(--semantics-card)] rounded-md overflow-hidden border border-solid border-[color:var(--semantics-border)]">
                <div className="flex items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[color:var(--semantics-border)]">
                    <div className="relative flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] text-semantics-muted-foreground text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                        Death Switch
                    </div>
                    <Button
                        className="!flex-[0_0_auto] !p-2"
                        icon={<IconPlus3 className="!relative !w-4 !h-4" color="#F5F5F4" />}
                        stateProp="enabled"
                        type="icon"
                        onClick={() => { setOpen(true); setModelType("deathswitch") }}
                    />
                </div>
                <div className="w-full p-2">
                    {/* <Bye1 className="!relative !w-[120px] !h-[120px]" /> */}
                    {deathswitch?.map((death) => {
                        return (
                            <div className="w-full rounded h-10 border border-black p-2">
                                <div className="grid grid-cols-3 gap-1">
                                    <div className="">1</div>
                                    <div>{death.name}</div>
                                    <div className="text-right"><Label color={death.active ? 'green' : 'red'} horizontal>
                                        {success ? 'executed' : death.active ? 'active' : 'inactive'}
                                    </Label></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col w-[360px] h-[236px] items-start absolute top-[120px] left-[540px] bg-[color:var(--semantics-card)] rounded-md overflow-hidden border border-solid border-[color:var(--semantics-border)]">
                <div className="flex items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[color:var(--semantics-border)]">
                    <div className="relative flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] text-semantics-muted-foreground text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                        Beneficiaries
                    </div>
                    <Button
                        className="!flex-[0_0_auto] !p-2"
                        icon={<IconEdit1 className="!relative !w-4 !h-4" />}
                        stateProp="enabled"
                        type="icon"
                        onClick={() => { setOpen(true); setModelType("beneficiary") }}
                    />
                </div>
                <div className="row col-span-1 w-full p-2">
                    {/* <BusinessDeal1 className="!relative !w-[120px] !h-[120px]" /> */}
                    {!loading && beneficiaries?.map((bene) => {
                        if (bene) {
                            return (
                                <div className="w-full rounded h-10 border border-black p-2">
                                    <div className="grid grid-cols-5 gap-1 relative">
                                        <div className="">1</div>
                                        <div>{bene?.name}</div>
                                        <div>{bene?.email}</div>
                                        <div onClick={() => removeItemFromLocalStorage(bene?.name)} className="absolute float-right right-0"><Icon name="cancel" color="red">
                                        </Icon></div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {loading && <Loader />}
                </div>
            </div>
            <div className="flex flex-col w-[360px] h-[236px] items-start absolute top-[120px] left-[156px] bg-[color:var(--semantics-card)] rounded-md overflow-hidden border border-solid border-[color:var(--semantics-border)]">
                <div className="flex items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[color:var(--semantics-border)]">
                    <div className="relative flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] text-semantics-muted-foreground text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                        Connected Wallets
                    </div>
                    {/* {!account?.address ? <ConnectButton client={client} /> : <button>Connect</button>} */}
                    <ConnectButton client={client} />
                    {/* <Button
                        className="!flex-[0_0_auto] !p-2"
                        icon={<IconPlus3 className="!relative !w-4 !h-4" color="#F5F5F4" />}
                        stateProp="enabled"
                        type="icon"
                    /> */}
                </div>
                <div className="row col-span-1 w-full p-2">
                    {account?.address && <div className="w-full rounded h-10 border border-black p-2">
                        <div className="grid grid-cols-3 gap-3 text-left">
                            <div>1</div>
                            <div>{balance?.displayValue} {balance?.symbol}</div>
                            <div>{account?.address.slice(0, 5)}</div>
                        </div>
                    </div>}
                    {/* <div className="w-full rounded h-10 border border-black mt-2">
                        <div className="grid grid-cols-3 gap-3">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="gap-2.5 px-[126px] py-[27px] flex-1 grow flex items-center justify-center relative self-stretch w-full">
                    <CryptowalletsShowing1 className="!relative !w-[120px] !h-[120px] !mt-[-1.00px] !mb-[-1.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div> */}
            </div>
        </div>
    );
};
