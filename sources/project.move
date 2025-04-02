module MyModule::IPProtection {
    use aptos_framework::signer;
    use std::string::String;

    /// Struct representing an intellectual property record.
    struct Invention has store, key {
        owner: address,
        description: String,
    }

    /// Function to register an invention on-chain.
    public fun register_invention(owner: &signer, description: String) {
        let invention = Invention {
            owner: signer::address_of(owner),
            description,
        };
        move_to(owner, invention);
    }

    /// Function to verify ownership of an invention.
    public fun verify_ownership(inventor: address): address acquires Invention {
        let invention = borrow_global<Invention>(inventor);
        invention.owner
    }
}
