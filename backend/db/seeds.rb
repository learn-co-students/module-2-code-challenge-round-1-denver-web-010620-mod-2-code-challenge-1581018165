Heroine.destroy_all
Power.destroy_all

invisible = Power.create(name:"Invisibility", description: "This power allows you to hide from your enemies while becoming unseen to the human eye")
strength = Power.create(name:"Mega Strength", description: "This power allows you to have crazy strength and defeat your enemies")
speed = Power.create(name:"Speed", description: "This power allows you to run at super speed. Top levels of speed leave you also invisible to the human eye")

samantha = Heroine.create(name:"Samantha", super_name: "Super Samantha", power: invisible)
kate = Heroine.create(name:"Kate", super_name: "Super Kate", power: strength)
lilly = Heroine.create(name:"Lilly", super_name: "Super Lilly", power: speed)
